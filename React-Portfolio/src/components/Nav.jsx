export default function nav(){
 const navList = (
    <ul>
      <li>About Me</li>
      <li>Portfolio Projects</li>
      <li>Contact</li>
      <li>Resume</li>
    </ul>
  );
  return navList
    };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nav);

