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
    }
    internal class Program
    { 
        static void Main(string[] args)
        {
            
        }
    }
}
