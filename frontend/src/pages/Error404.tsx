const Error404 = () => {
    return(
        <div className="h-full flex flex-col justify-center items-center gap-2">
            <p className="text-9xl font-bold">404</p>
            <p className="text-3xl font-semibold">Erro 404, PÁGINA NÃO ENCONTRADA</p>
            <p>Não conseguimos encontrar a url. Isto é tudo que sabemos :(</p>
        </div>
    );
};

export default Error404;