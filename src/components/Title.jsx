import '../styles/Title.css'


type titleProps = {
    children: string;
}

export default function Title({ children }: titleProps) {
    return (
        <h1 className='title'>{ children }</h1>
    );
}
