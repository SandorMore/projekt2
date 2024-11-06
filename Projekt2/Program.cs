using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Projekt2
{
    public class Component
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public string Specifications { get; set; }
        public decimal Price { get; set; }

        public Component(string type, string name, string specifications, decimal price)
        {
            Type = type;
            Name = name;
            Specifications = specifications;
            Price = price;
        }

        public override string ToString()
        {
            return $"{Type};{Name};{Specifications};{Price}";
        }
    }
    public class ComponentManager
    {
        private const string FilePath = "components.txt";

        public void AddComponent(Component component)
        {
            using (StreamWriter writer = new StreamWriter(FilePath, append: true))
            {
                writer.WriteLine(component.ToString());
            }
        }

        public List<Component> LoadComponents()
        {
            var components = new List<Component>();

            if (File.Exists(FilePath))
            {
                var lines = File.ReadAllLines(FilePath);
                foreach (var line in lines)
                {
                    var parts = line.Split(';');
                    if (parts.Length == 4 &&
                        decimal.TryParse(parts[3], out decimal price))
                    {
                        components.Add(new Component(parts[0], parts[1], parts[2], price));
                    }
                }
            }
            return components;
        }
        public List<Component> SearchByTypeOrName(string query)
        {
            var components = LoadComponents();
            return components
                .Where(c => c.Type.Contains(query, StringComparison.OrdinalIgnoreCase) ||
                            c.Name.Contains(query, StringComparison.OrdinalIgnoreCase))
                .ToList();
        }

        public List<Component> SearchByPriceRange(decimal minPrice, decimal maxPrice)
        {
            var components = LoadComponents();
            return components
                .Where(c => c.Price >= minPrice && c.Price <= maxPrice)
                .ToList();
        }
    }
    public Dictionary<string, int> GenerateStatistics()
    {
        var components = LoadComponents();
        var statistics = new Dictionary<string, int>();

        foreach (var component in components)
        {
            if (!statistics.ContainsKey(component.Name))
            {
                statistics[component.Name] = 0;
            }
            statistics[component.Name]++;
        }
        return statistics;
    }
    public void ApplyDiscount(string componentType, decimal discountPercent)
    {
        var components = LoadComponents();
        var discountedComponents = components.Select(c =>
        {
            if (string.IsNullOrEmpty(componentType) || c.Type.Equals(componentType, StringComparison.OrdinalIgnoreCase))
            {
                c.Price -= c.Price * (discountPercent / 100);
            }
            return c;
        }).ToList();

        using (StreamWriter writer = new StreamWriter(FilePath, append: false))
        {
            foreach (var component in discountedComponents)
            {
                writer.WriteLine(component.ToString());
            }
        }
    }
    internal class Program
    { 
        static void Main(string[] args)
        {
            ComponentManager manager = new ComponentManager();
            bool running = true;

            while (running)
            {
                Console.WriteLine("\nSzámítógép bolt menü:");
                Console.WriteLine("1. Új alkatrész hozzáadása");
                Console.WriteLine("2. Alkatrészek listázása");
                Console.WriteLine("3. Keresés típusra vagy névre");
                Console.WriteLine("4. Keresés ár intervallumra");
                Console.WriteLine("5. Statisztika készítése");
                Console.WriteLine("6. Akciós ár alkalmazása");
                Console.WriteLine("0. Kilépés");

                Console.Write("Választás: ");
                switch (Console.ReadLine())
                {
                    case "1":
                        AddNewComponent(manager);
                        break;
                    case "2":
                        ListComponents(manager);
                        break;
                    case "3":
                        SearchByTypeOrName(manager);
                        break;
                    case "4":
                        SearchByPriceRange(manager);
                        break;
                    case "5":
                        GenerateStatistics(manager);
                        break;
                    case "6":
                        ApplyDiscount(manager);
                        break;
                    case "0":
                        running = false;
                        break;
                    default:
                        Console.WriteLine("Érvénytelen választás!");
                        break;
                }
            }
        }

        static void AddNewComponent(ComponentManager manager)
        {
            Console.Write("Alkatrész típusa: ");
            string type = Console.ReadLine();
            Console.Write("Alkatrész neve: ");
            string name = Console.ReadLine();
            Console.Write("Specifikációk: ");
            string specifications = Console.ReadLine();
            Console.Write("Ár (Ft): ");
            if (decimal.TryParse(Console.ReadLine(), out decimal price))
            {
                var component = new Component(type, name, specifications, price);
                manager.AddComponent(component);
                Console.WriteLine("Alkatrész hozzáadva!");
            }
            else
            {
                Console.WriteLine("Hibás ár formátum!");
            }
        }

        static void ListComponents(ComponentManager manager)
        {
            var components = manager.LoadComponents();
            foreach (var component in components)
            {
                Console.WriteLine(component);
            }
        }

        static void SearchByTypeOrName(ComponentManager manager)
        {
            Console.Write("Keresési feltétel (típus vagy név): ");
            string query = Console.ReadLine();
            var results = manager.SearchByTypeOrName(query);
            results.ForEach(Console.WriteLine);
        }

        static void SearchByPriceRange(ComponentManager manager)
        {
            Console.Write("Minimális ár: ");
            decimal minPrice = decimal.Parse(Console.ReadLine());
            Console.Write("Maximális ár: ");
            decimal maxPrice = decimal.Parse(Console.ReadLine());
            var results = manager.SearchByPriceRange(minPrice, maxPrice);
            results.ForEach(Console.WriteLine);
        }

        static void GenerateStatistics(ComponentManager manager)
        {
            var statistics = manager.GenerateStatistics();
            foreach (var entry in statistics)
            {
                Console.WriteLine($"{entry.Key}: {entry.Value} db");
            }
        }

        static void ApplyDiscount(ComponentManager manager)
        {
            Console.Write("Akciós típus (üres minden típushoz): ");
            string type = Console.ReadLine();
            Console.Write("Kedvezmény százalékban: ");
            if (decimal.TryParse(Console.ReadLine(), out decimal discount))
            {
                manager.ApplyDiscount(type, discount);
                Console.WriteLine("Kedvezmény alkalmazva!");
            }
            else
            {
                Console.WriteLine("Hibás kedvezmény!");
            }
        }
    }
}
