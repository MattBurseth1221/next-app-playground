import "../globals.css";

type Props = {
    title: string;
}

export default function PageTitle({title}: Props) {
    return <h2 className="text-4xl mb-10 border-b-[1px]">{title}</h2>;
}