import Card from "@/components/Card";

const sizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg"
}

const shapes = [ "rounded-sm", "rounded-md", "rounded-full"]

const Landing : React.FC = () => {

    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
        </div>
    )
}

export default Landing;