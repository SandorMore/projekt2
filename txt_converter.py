import json
f = open("components.txt","r",encoding="utf8")
lines = f.readlines()
f.close()
data = []
for count,line in enumerate(lines):
    line = line.strip().split(";")
    line[2] = line[2].split(",")
    specs = {}
    for count, i in enumerate(line[2]):
        i.split(":")
        specs.append(i[0]:i[1])

    data.append({"type":line[0],"name":line[1],"specs":line[2],"price":line[3]})

for i in data:
    print(i)