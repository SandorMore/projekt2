import json
f = open("components.txt","r",encoding="utf8")
lines = f.readlines()
f.close()
data = []
for count,line in enumerate(lines):
    line = line.strip().split(";")
    line[2] = line[2].split(",")
    specs = {}
    print(count)
    for count, i in enumerate(line[2]):
        parts = i.split(":")
        print(parts)
        print(parts[0],parts[1])
        specs[parts[0]] = parts[1]

    data.append({"type":line[0],"name":line[1],"specs":specs,"price":line[3]})

for i in data:
    print(i)

json_object = json.dumps(data, ensure_ascii=False ,indent=4)

with open("components.json", "w",encoding="utf8") as outfile:
    outfile.write(json_object)