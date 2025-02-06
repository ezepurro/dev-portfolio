
interface TechProps {
    component: React.ReactNode;
    name: string;
}

const Tech:React.FC<TechProps> = ({ component, name }) => {
  return (
    <div className="tech flex justify-center items-center">
        {component}
        <p>{name}</p>
    </div>
  )
}

export default Tech;
