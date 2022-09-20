import * as Si from 'react-icons/si'

export function Footer() {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="h-10 w-full bg-orange-400"
                preserveAspectRatio="none"
            >
                <path
                    className="fill-white"
                    d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,96C672,96,768,128,864,149.3C960,171,1056,181,1152,160C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>
            <div className="bg-orange-400 text-white">
                <div className="mx-auto max-w-screen-md space-y-2 px-4 pb-6 text-center">
                    <div className="text-sm">Developed by João F.C. Santos</div>
                    <div className="flex items-center justify-center gap-2 text-lg">
                        <a
                            href="https://www.linkedin.com/in/sanntozzz/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Si.SiLinkedin />
                        </a>

                        <a
                            href="https://github.com/sanntozzz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Si.SiGithub />
                        </a>
                    </div>
                    <p className="text-xs">
                        This site was created to showcase the developer's skills
                        and experience. The WHAT2EAT brand is a factitious brand
                        and was created just for this demo site.
                    </p>
                </div>
            </div>
        </>
    )
}
