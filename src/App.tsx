export const App = () => {
    return (
        <div className='h-screen w-screen bg-red-400 font-mono flex flex-col'>
            <div className="flex justify-between items-center px-2 py-2">
                <a href="/" >
                    <img className="w-8 h-8 md:w-16 md:h-16" src="https://user-images.githubusercontent.com/86385745/207751154-d4cb9b6a-1bf8-41e9-a66c-12f17ff04140.png" alt="" />
                </a>
                <h1 className="text-center text-2xl md:text-4xl">Pomodoro</h1>
                <img className="w-8 h-8 md:w-16 md:h-16" src="https://user-images.githubusercontent.com/86385745/207751613-3579f7c9-390c-4f5d-8985-7fc72de51e4b.png" alt="" />
            </div>
            <div className="flex justify-center">
                <span className="bg-black h-[0.03rem] w-4/5 md:w-11/12"></span>
            </div>
            <div>
                <div className="bg-black w-40">

                </div>
            </div>
        </div>
    )
}

