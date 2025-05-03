const Error404 = () => {
    return(
        <div className="text-center h-full flex flex-col justify-center items-center gap-2 p-8 w-fit mx-auto">
            <p className="text-9xl leading-30 font-bold text-app-secondary">404</p>
            <hr className="border-app-detail/25 w-full" />
            <p className="text-3xl font-semibold">PÁGINA NÃO ENCONTRADA</p>
            <p>Não conseguimos encontrar a URL. Isto é tudo que sabemos :(</p>
        </div>
    );
};

export default Error404;