"use client"
import { useForm } from 'react-hook-form';
import { prisma } from '../../config/db';

const MyForm = () => {
  const { reset, handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try{
      const result = await prisma.school.create({
        data : data
      })
      console.log(result);
    } catch (error){
      console.log(error);
    }
    reset();
  };

  return (
    <div className='max-w-lg mt-8 mx-4 lg:mx-auto md:mx-auto'>
      <div>
        <span className='text-2xl font-semibold'>Enter your school details:</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            id="name"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Address:
          </label>
          <input
            {...register('address', { required: 'Address is required' })}
            type="text"
            id="address"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.address && <p className="text-red-500 text-xs italic">{errors.address.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            City:
          </label>
          <input
            {...register('city', { required: 'City is required' })}
            type="text"
            id="city"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.city && <p className="text-red-500 text-xs italic">{errors.city.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            State:
          </label>
          <input
            {...register('state', { required: 'State is required' })}
            type="text"
            id="state"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.state && <p className="text-red-500 text-xs italic">{errors.state.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Contact:
          </label>
          <input
            {...register('contact', { required: 'Contact is required' })}
            type="number"
            id="number"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.contact && <p className="text-red-500 text-xs italic">{errors.contact.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image:
          </label>
          <input
            {...register('image', { required: 'Image is required' })}
            type="file"
            id="image"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.image && <p className="text-red-500 text-xs italic">{errors.image.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Email:
          </label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            id="email"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
