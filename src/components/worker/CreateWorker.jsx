import { useFormik } from 'formik';
import { useState } from 'react';
import { colors } from '../../components/ui/color/color';
import { workerValidationSchema } from '../../validations/workerValidation';

export default function CreateWorker() {
  const [preview, setPreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      image: '',
      age: '',
      nid: '',
      serviceType: [],
      expertise: '',
      shift: '',
      rating: '',
      feedback: '',
    },
    validationSchema: workerValidationSchema,
    onSubmit: (values) => {
      console.log('✅ Form Submitted:', values);
      alert('Form submitted successfully!');
    },
  });

  return (
    <div
      className='w-full max-w-4xl mx-auto'
      style={{ color: colors.primary[700] }}>
      <h2 className='text-xl font-bold text-center mb-6 mt-4 text-primary-900'>
        Worker Profile Registration
      </h2>
      <div className='rounded-xl shadow-md p-8 border bg-linear-to-br from-white to-slate-50 border-slate-200'>
        <form className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          {/* Name */}
          <div className='md:col-span-1'>
            <label className='block text-sm mb-1 text-neutral-600 font-semibold'>
              Full Name
            </label>
            <input
              type='text'
              name='name'
              placeholder='Full Name'
              {...formik.getFieldProps('name')}
              className='w-full p-2.5 rounded-md focus:outline-none'
              style={{
                background: colors.white,
                border: `1px solid ${
                  formik.touched.name && formik.errors.name
                    ? colors.error[500]
                    : colors.neutral[300]
                }`,
                color: colors.primary[700],
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = colors.accent[500])
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor =
                  formik.touched.name && formik.errors.name
                    ? colors.error[500]
                    : colors.neutral[300])
              }
            />
            {formik.touched.name && formik.errors.name && (
              <p className='text-sm' style={{ color: colors.error[500] }}>
                {formik.errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className='md:col-span-1'>
            <label className='block text-sm mb-1 text-neutral-600 font-semibold'>
              {' '}
              Email Address
            </label>
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              {...formik.getFieldProps('email')}
              className='w-full p-2.5 rounded-md focus:outline-none'
              style={{
                background: colors.white,
                border: `1px solid ${
                  formik.touched.email && formik.errors.email
                    ? colors.error[500]
                    : colors.neutral[300]
                }`,
                color: colors.primary[700],
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = colors.accent[500])
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor =
                  formik.touched.email && formik.errors.email
                    ? colors.error[500]
                    : colors.neutral[300])
              }
            />
            {formik.touched.email && formik.errors.email && (
              <p className='text-sm' style={{ color: colors.error[500] }}>
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className='md:col-span-1'>
            <label className='block text-sm mb-1 text-neutral-600 font-semibold'>
              {' '}
              Phone Number
            </label>
            <input
              type='text'
              name='phone'
              placeholder='Phone Number'
              {...formik.getFieldProps('phone')}
              className='w-full p-2.5 rounded-md focus:outline-none'
              style={{
                background: colors.white,
                border: `1px solid ${
                  formik.touched.phone && formik.errors.phone
                    ? colors.error[500]
                    : colors.neutral[300]
                }`,
                color: colors.primary[700],
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = colors.accent[500])
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor =
                  formik.touched.phone && formik.errors.phone
                    ? colors.error[500]
                    : colors.neutral[300])
              }
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className='text-sm' style={{ color: colors.error[500] }}>
                {formik.errors.phone}
              </p>
            )}
          </div>

          {/* Image */}
          <div className='md:col-span-1'>
            <label className='block text-sm mb-1 text-neutral-600 font-semibold'>
              Upload Image
            </label>
            <input
              type='file'
              name='image'
              accept='image/*'
              className='w-full border border-neutral-300 p-2.5 rounded-md bg-white text-primary-700 focus:outline-none'
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = colors.accent[500])
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = colors.neutral[300])
              }
            />
            {preview && (
              <img
                src={preview}
                alt='Preview'
                className='mt-2 w-20 h-20 object-cover rounded-md border border-neutral-200'
              />
            )}
          </div>

          {/* Age */}
          <div className='md:col-span-1'>
            <label className='block text-sm mb-1 text-neutral-600 font-semibold'>
              Age
            </label>
            <input
              type='number'
              name='age'
              placeholder='Age'
              {...formik.getFieldProps('age')}
              className='w-full p-2.5 rounded-md focus:outline-none'
              style={{
                background: colors.white,
                border: `1px solid ${
                  formik.touched.age && formik.errors.age
                    ? colors.error[500]
                    : colors.neutral[300]
                }`,
                color: colors.primary[700],
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = colors.accent[500])
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor =
                  formik.touched.age && formik.errors.age
                    ? colors.error[500]
                    : colors.neutral[300])
              }
            />
            {formik.touched.age && formik.errors.age && (
              <p className='text-sm' style={{ color: colors.error[500] }}>
                {formik.errors.age}
              </p>
            )}
          </div>

          {/* NID */}
          <div className='md:col-span-1'>
            <label className='block text-sm mb-1 text-neutral-600 font-semibold'>
              NID Number
            </label>
            <input
              type='text'
              name='nid'
              placeholder='NID Number'
              {...formik.getFieldProps('nid')}
              className='w-full p-2.5 rounded-md focus:outline-none'
              style={{
                background: colors.white,
                border: `1px solid ${
                  formik.touched.nid && formik.errors.nid
                    ? colors.error[500]
                    : colors.neutral[300]
                }`,
                color: colors.primary[700],
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = colors.accent[500])
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor =
                  formik.touched.nid && formik.errors.nid
                    ? colors.error[500]
                    : colors.neutral[300])
              }
            />
            {formik.touched.nid && formik.errors.nid && (
              <p className='text-sm' style={{ color: colors.error[500] }}>
                {formik.errors.nid}
              </p>
            )}
          </div>

          {/* Service Type */}
          <div className='md:col-span-3'>
            <label className='block text-sm mb-1 text-neutral-600 font-semibold'>
              Service Type
            </label>
            <div className='flex flex-wrap gap-2'>
              {['Cleaning', 'Plumbing', 'Electrician', 'Cooking'].map(
                (type) => (
                  <label key={type} className='flex items-center space-x-1'>
                    <input
                      type='checkbox'
                      value={type}
                      checked={formik.values.serviceType.includes(type)}
                      style={{ accentColor: colors.accent[500] }}
                    />
                    <span
                      className='text-sm'
                      style={{ color: colors.primary[700] }}>
                      {type}
                    </span>
                  </label>
                )
              )}
            </div>
            {formik.touched.serviceType && formik.errors.serviceType && (
              <p className='text-sm' style={{ color: colors.error[500] }}>
                {formik.errors.serviceType}
              </p>
            )}
          </div>

          {/* Expertise */}
          <div className='md:col-span-1'>
            <label className='block text-sm mb-1 text-neutral-600 font-semibold'>
              Expertise (1-10)
            </label>
            <input
              type='number'
              name='expertise'
              placeholder='Expertise (1-10)'
              {...formik.getFieldProps('expertise')}
              className='w-full p-2.5 rounded-md focus:outline-none'
              style={{
                background: colors.white,
                border: `1px solid ${
                  formik.touched.expertise && formik.errors.expertise
                    ? colors.error[500]
                    : colors.neutral[300]
                }`,
                color: colors.primary[700],
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = colors.accent[500])
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor =
                  formik.touched.expertise && formik.errors.expertise
                    ? colors.error[500]
                    : colors.neutral[300])
              }
            />
            {formik.touched.expertise && formik.errors.expertise && (
              <p className='text-sm' style={{ color: colors.error[500] }}>
                {formik.errors.expertise}
              </p>
            )}
          </div>

          {/* Shift */}
          <div className='md:col-span-1'>
            <label className='block text-sm mb-1 text-neutral-600 font-semibold'>
              Shift
            </label>
            <select
              name='shift'
              {...formik.getFieldProps('shift')}
              className='w-full p-2.5 rounded-md focus:outline-none'
              style={{
                background: colors.white,
                border: `1px solid ${
                  formik.touched.shift && formik.errors.shift
                    ? colors.error[500]
                    : colors.neutral[300]
                }`,
                color: colors.primary[700],
              }}>
              <option value=''>Select Shift</option>
              <option value='Day'>Day</option>
              <option value='Night'>Night</option>
            </select>
            {formik.touched.shift && formik.errors.shift && (
              <p className='text-sm' style={{ color: colors.error[500] }}>
                {formik.errors.shift}
              </p>
            )}
          </div>

          {/* Rating */}
          <div className='md:col-span-1'>
            <label className='block text-sm mb-1 text-neutral-600 font-semibold'>
              Rating (1-5)
            </label>
            <input
              type='number'
              name='rating'
              placeholder='Rating (1-5)'
              {...formik.getFieldProps('rating')}
              className='w-full p-2.5 rounded-md focus:outline-none'
              style={{
                background: colors.white,
                border: `1px solid ${
                  formik.touched.rating && formik.errors.rating
                    ? colors.error[500]
                    : colors.neutral[300]
                }`,
                color: colors.primary[700],
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = colors.accent[500])
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor =
                  formik.touched.rating && formik.errors.rating
                    ? colors.error[500]
                    : colors.neutral[300])
              }
            />
            {formik.touched.rating && formik.errors.rating && (
              <p className='text-sm' style={{ color: colors.error[500] }}>
                {formik.errors.rating}
              </p>
            )}
          </div>

          {/* Feedback */}
          <div className='md:col-span-3'>
            <label className='block text-sm mb-1 text-neutral-600 font-semibold'>
              Feedback (optional)
            </label>
            <textarea
              name='feedback'
              placeholder='Feedback (optional)'
              {...formik.getFieldProps('feedback')}
              className='w-full p-2.5 rounded-md focus:outline-none'
              style={{
                background: colors.white,
                border: `1px solid ${
                  formik.touched.feedback && formik.errors.feedback
                    ? colors.error[500]
                    : colors.neutral[300]
                }`,
                color: colors.primary[700],
                minHeight: 96,
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = colors.accent[500])
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor =
                  formik.touched.feedback && formik.errors.feedback
                    ? colors.error[500]
                    : colors.neutral[300])
              }></textarea>
            {formik.touched.feedback && formik.errors.feedback && (
              <p className='text-sm' style={{ color: colors.error[500] }}>
                {formik.errors.feedback}
              </p>
            )}
          </div>

          <div className='md:col-span-3 pt-2'>
            <div className='flex items-center justify-center gap-3'>
              <button
                type='submit'
                className='px-5 py-2 rounded-md text-white transition cursor-pointer'
                style={{ background: colors.accent[500] }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = colors.accent[600])
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = colors.accent[500])
                }>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
