import { Link } from 'react-router-dom'
export function Home() {
    return (
        <div className="container mx-auto flex flex-1 flex-col justify-between gap-12 px-4 py-6 lg:flex-row lg:items-center">
            <div className="space-y-6">
                <div className="text-6xl font-bold uppercase lg:text-8xl">
                    <div className="text-orange-400">Don&apos;t Know</div>
                    <div>What to</div>
                    <div className="text-orange-400">Eat?</div>
                </div>
                <Link
                    to="/meal"
                    className="inline-block rounded-full bg-[#3F3D56] p-3 px-6 text-white duration-150 hover:bg-orange-400"
                >
                    You are just a click away!
                </Link>
            </div>
            <div className="mx-auto w-full max-w-xl">
                <img src="/images/headerImg.svg" alt="WHAT2EAT" />
            </div>
        </div>
    )
}
