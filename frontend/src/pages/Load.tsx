const Load = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full h-full border overflow-hidden">
            <div className="flex flex-col justify-center items-center w-3/4">
                <div className="flex justify-center items-center w-3/4">
                    <img
                        src="src/assets/logo3.png"
                        alt="Login"
                        className="w-full min-w-xl max-w-3xl m-auto"
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-body-1 capitalize">seu próximo salto rumo ao bem-estar</p>
                    <progress className="progress w-84 progress-primary"></progress>
                </div>
            </div>
        </div>
    );
}

export default Load