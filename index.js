function App() {
    const [data, setData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./books.json');
            const json = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    }, []);
    console.log('loaded:', loaded, 'data:', data);

    return (<>
        <div className="container">
            <h1>React Components</h1>
            {loaded && data.books.map((book,i) => <mit-book
                title={book.title}
                subtitle={book.subtitle}
                author={book.subtitle}
                publisher={book.publisher}
                description={book.description}
                key={i}/>)}
        </div>
    </>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
