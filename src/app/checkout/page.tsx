// Step 1: Define prop types for the component
type MyComponentProps = {
    backgroundImage: string; // Define the backgroundImage prop as a string
    breadcrumbItems: { href: string; label: string }[]; // Define breadcrumbItems as an array of objects
    title: string; // Define title as a string
  };
  
  // Step 2: Define the functional component with the props
  const MyComponent: React.FC<MyComponentProps> = ({ backgroundImage, breadcrumbItems, title }) => {
    return (
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', padding: '20px' }}>
        <h1>{title}</h1>
        <nav>
          <ul>
            {breadcrumbItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  };
  
  // Step 3: Use the component with the correct props
  const App = () => {
    const breadcrumbItems = [
      { href: '/home', label: 'Home' },
      { href: '/about', label: 'About' }
    ];
  
    return (
      <MyComponent 
        backgroundImage="path/to/your/image.jpg" 
        breadcrumbItems={breadcrumbItems} 
        title="My Page Title"
      />
    );
  };
  
  export default App;
  