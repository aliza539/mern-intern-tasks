export function showMenu(): void {

  console.log(`


Commands:

add "task description" [priority]
update <id> "new description"
delete <id>
mark <id> done
list
search priority <value>
sort priority [asc|desc]
stats
status
help
`);
}