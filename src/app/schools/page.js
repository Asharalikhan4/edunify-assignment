import { fetchSchools } from "@/utils";

const res = await fetchSchools();
console.log(res);

const page = () => {
    return (
        <div className="max-w-lg mt-8 mx-4 lg:mx-auto md:mx-auto">
            <div className="text-2xl font-semibold">List of all Schools</div>
            <div className="mt-4">
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-3">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="School image" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Shri Guru Ram Rai</h6>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Address:</span> Kurriya</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">City:</span> Hardoi</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">State:</span>: Uttar Pradesh</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Contact:</span> 0123456789</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Email:</span> contactsgrr@gmail.com</p>
                    </div>
                </div>

                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-3">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="School image" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Shri Guru Ram Rai</h6>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Address:</span> Kurriya</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">City:</span> Hardoi</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">State:</span>: Uttar Pradesh</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Contact:</span> 0123456789</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Email:</span> contactsgrr@gmail.com</p>
                    </div>
                </div>

                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-3">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="School image" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Shri Guru Ram Rai</h6>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Address:</span> Kurriya</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">City:</span> Hardoi</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">State:</span>: Uttar Pradesh</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Contact:</span> 0123456789</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Email:</span> contactsgrr@gmail.com</p>
                    </div>
                </div>

                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-3">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="School image" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Shri Guru Ram Rai</h6>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Address:</span> Kurriya</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">City:</span> Hardoi</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">State:</span>: Uttar Pradesh</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Contact:</span> 0123456789</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Email:</span> contactsgrr@gmail.com</p>
                    </div>
                </div>

                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-3">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="School image" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Shri Guru Ram Rai</h6>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Address:</span> Kurriya</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">City:</span> Hardoi</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">State:</span>: Uttar Pradesh</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Contact:</span> 0123456789</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-medium">Email:</span> contactsgrr@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page;