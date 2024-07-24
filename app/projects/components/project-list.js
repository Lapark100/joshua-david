import Card from "@/components/card";
export default async function ProjectList() {
    const fetchRepos = async () => {
        const response = await fetch('https://api.github.com/users/piotr-jura-udemy/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      };
      
      const repos = await fetchRepos();
      
      return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map(({id, title, name, description, stargazers_count}) => (
          <li key={id} className="mb-4">
            <Card className='h-full font-sans'>
              <div className="flex justify-between mb-4">
              <div className="font-semibold">{name}</div>
              <div>⭐{stargazers_count}</div>
              </div>
            
            <div>{description}</div>
            </Card>
          </li>
        ))}
      </ul>
      )
      
}

