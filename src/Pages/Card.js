const CardWithForm = () => {
    return (
        <div className="mx-auto mt-12"> {/* Outer wrapper, spans full width */}

            {/* Full-Screen Image */}
            <div className="max-w-7xl mx-auto">
                <img
                    src="../../Man1.png"  // Ensure this path is correct relative to public folder or import it
                    alt="Image of a person"
                    className="w-full h-[550px] object-cover rounded-lg"
                />
            </div>

            {/* Content Below the Image */}
            <div className="bg-white py-12 max-w-7xl mx-auto"> {/* Inner content constrained to max-w-7xl */}
                {/* Airplane Icon and Text */}
                <div className="flex items-center space-x-2 text-blue-600 text-lg font-extrabold mb-4">
                    {/* Airplane Icon */}
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_0_2768)">
                            <path d="M23.6706 14.3308C24.9728 15.633 27.0917 15.6331 28.3939 14.3308C29.0246 13.7 29.3721 12.8613 29.3721 11.9692C29.3721 11.0771 29.0246 10.2384 28.3939 9.60763C27.7428 8.95651 26.8875 8.63098 26.0322 8.63098C25.177 8.63098 24.3217 8.95651 23.6707 9.60763C23.0399 10.2384 22.6924 11.0771 22.6924 11.9692C22.6924 12.8613 23.0398 13.7 23.6706 14.3308Z" fill="#232536"/>
                            <path d="M9.66612 10.2616L6.37395 10.5159C5.45787 10.5867 4.64199 11.0669 4.13538 11.8332L0.338602 17.5756C-0.0456256 18.1567 -0.106707 18.884 0.175099 19.521C0.45698 20.1581 1.03625 20.6021 1.72463 20.7088L4.739 21.1756C5.44414 17.4335 7.13216 13.7006 9.66612 10.2616Z" fill="#1B4DFF"/>
                            <path d="M16.8229 33.2593L17.2898 36.2736C17.3965 36.962 17.8405 37.5413 18.4775 37.8231C18.7425 37.9404 19.0231 37.9983 19.3022 37.9983C19.6943 37.9983 20.0836 37.884 20.423 37.6596L26.1656 33.8629C26.9319 33.3562 27.412 32.5403 27.4827 31.6243L27.737 28.3322C24.2979 30.8662 20.5651 32.5542 16.8229 33.2593Z" fill="#1B4DFF"/>
                            <path d="M15.69 31.1709C15.7947 31.1709 15.8999 31.1623 16.0049 31.1448C17.5727 30.8826 19.0838 30.441 20.5252 29.863L8.136 17.4738C7.55799 18.9151 7.11639 20.4262 6.85425 21.9941C6.75094 22.6121 6.95823 23.2417 7.40124 23.6848L14.3142 30.5978C14.682 30.9655 15.1785 31.1709 15.69 31.1709Z" fill="#1B4DFF"/>
                            <path d="M34.9703 16.8477C38.0021 10.9864 38.1144 4.79249 37.9559 1.88759C37.9017 0.892251 37.1081 0.0987102 36.1127 0.0444567C35.6397 0.0186288 35.0791 0 34.4473 0C31.1991 0 26.0594 0.491992 21.1525 3.03003C17.253 5.04706 12.1396 9.48835 9.12274 15.325C9.15837 15.3528 9.19317 15.3824 9.22598 15.4152L22.5853 28.7745C22.6181 28.8073 22.6475 28.842 22.6754 28.8776C28.512 25.8607 32.9533 20.7473 34.9703 16.8477ZM22.095 8.03337C24.2652 5.86316 27.7966 5.86294 29.9669 8.03337C31.0183 9.08468 31.5973 10.4826 31.5973 11.9694C31.5973 13.4562 31.0183 14.8541 29.9669 15.9054C28.8819 16.9904 27.4562 17.533 26.031 17.5332C24.6053 17.5332 23.1803 16.9907 22.095 15.9054C21.0436 14.8541 20.4645 13.4562 20.4645 11.9694C20.4645 10.4826 21.0436 9.08468 22.095 8.03337Z" fill="#232536"/>
                            <path d="M1.13499 31.3153C1.41991 31.3153 1.70484 31.2067 1.92215 30.9892L5.55687 27.3545C5.99164 26.9197 5.99164 26.2148 5.55687 25.7801C5.12217 25.3453 4.41724 25.3453 3.98246 25.7801L0.347748 29.4148C-0.0870259 29.8496 -0.0870259 30.5544 0.347748 30.9892C0.565134 31.2066 0.85006 31.3153 1.13499 31.3153Z" fill="#1B4DFF"/>
                            <path d="M8.88855 29.11C8.45385 28.6752 7.74892 28.6752 7.31415 29.11L0.32608 36.0981C-0.108693 36.5329 -0.108693 37.2377 0.32608 37.6725C0.543467 37.8899 0.828393 37.9985 1.11332 37.9985C1.39824 37.9985 1.68317 37.8899 1.90048 37.6724L8.88848 30.6844C9.32332 30.2496 9.32332 29.5448 8.88855 29.11Z" fill="#1B4DFF"/>
                            <path d="M10.6435 32.4435L7.00888 36.0782C6.57411 36.513 6.57411 37.2179 7.00888 37.6526C7.22627 37.87 7.51119 37.9787 7.79604 37.9787C8.0809 37.9787 8.3659 37.8701 8.58321 37.6526L12.2179 34.0179C12.6527 33.5821 12.6527 32.8773 12.2179 32.4435C11.7831 32.0087 11.0783 32.0087 10.6435 32.4435Z" fill="#1B4DFF"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_0_2768">
                                <rect width="38" height="38" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span className="align-middle">Startup</span> {/* Vertically aligns text with icon */}
                </div>

                {/* Title Text */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-left mb-6">
                    Step-by-step guide to choosing great font pairs
                </h1>

                {/* Paragraph Text */}
                <p className="text-lg font-bold text-left">
                    Talent pool? Try talent ocean. We help navigate that sea of applicants so you can connect faster and hire developers with the skills your team needs to innovate.
                </p>
            </div>

            {/* Additional Sections with Content */}
            <div className="max-w-7xl mx-auto">
                <h2 className="text-xl md:text-2xl font-extrabold text-left mb-6">
                    Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </h2>
                <p className="font-gray-600 text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                </p>
                <ul className="font-gray-800 font-bold text-left max-w-3xl list-disc pl-6">
                    <li>Lorem ipsum dolor sit amet,</li>
                    <li>Lorem ipsum dolor sit amet,</li>
                    <li>Lorem ipsum dolor sit amet,</li>
                    <li>Lorem ipsum dolor sit amet,</li>
                </ul>
                <p className="font-gray-600 text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                </p>
            </div>

            {/* Additional Section with More Content */}
            <div className="bg-gray-100 max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-left mb-6">
                    What to read next
                </h1>
                <div className="flex space-x-4">
                    <div className="w-1/3 p-4">
                        <img
                            src="../casestudy.svg" // Replace with your image source
                            alt="Description of Image"
                            className="w-full h-auto object-cover"
                        />
                        <p className="mt-4 text-blue-700">By John Doe | Aug 23, 2021</p>
                        <h1 className="mt-2 text-2xl font-semibold">This is the heading (H1).</h1>
                        <p className="mt-2 text-gray-700">This is the second paragraph content.</p>
                    </div>

                    <div className="w-1/3 p-4">
                        <img
                            src="../casestudy.svg" // Replace with your image source
                            alt="Description of Image"
                            className="w-full h-auto object-cover"
                        />
                        <p className="mt-4 text-blue-700">By John Doe | Aug 23, 2021</p>
                        <h1 className="mt-2 text-2xl font-semibold">This is the heading (H1).</h1>
                        <p className="mt-2 text-gray-700">This is the second paragraph content.</p>
                    </div>

                    <div className="w-1/3 p-4">
                        <img
                            src="../casestudy.svg" // Replace with your image source
                            alt="Description of Image"
                            className="w-full h-auto object-cover"
                        />
                        <p className="mt-4 text-blue-700">By John Doe | Aug 23, 2021</p>
                        <h1 className="mt-2 text-2xl font-semibold">This is the heading (H1).</h1>
                        <p className="mt-2 text-gray-700">This is the second paragraph content.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardWithForm;