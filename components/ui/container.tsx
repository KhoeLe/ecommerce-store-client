
interface Props {
    children: React.ReactNode;
}

function Container({ children }: Props) {
    return <div className="container mx-auto max-w-7xl">{children}</div>;
}

export default Container;
