import { useState, type FormEvent } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/myeyyzke'

const PHONE_PATTERN = /^0\d{1,2}-?\d{3,4}-?\d{4}$/

interface FormValues {
  name: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  message?: string
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

const initialValues: FormValues = { name: '', phone: '', message: '' }

export default function ApplyForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleChange =
    (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }))
    }

  const validate = (): FormErrors => {
    const next: FormErrors = {}
    if (!values.name.trim()) next.name = '이름을 입력해주세요.'
    if (!values.phone.trim()) next.phone = '연락처를 입력해주세요.'
    else if (!PHONE_PATTERN.test(values.phone.trim()))
      next.phone = '올바른 전화번호 형식으로 입력해주세요. (예: 010-1234-5678)'
    if (!values.message.trim()) next.message = '문의 내용을 입력해주세요.'
    return next
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    const timeoutController = new AbortController()
    const timeoutId = setTimeout(() => timeoutController.abort(), 10000)
    try {
      const formData = new FormData()
      formData.append('name', values.name)
      formData.append('phone', values.phone)
      formData.append('message', values.message)

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
        signal: timeoutController.signal,
      })

      if (!response.ok) throw new Error('submit failed')

      setStatus('success')
      setValues(initialValues)
      setErrors({})
    } catch {
      setStatus('error')
    } finally {
      clearTimeout(timeoutId)
    }
  }

  const inputBaseClass =
    'w-full rounded-xl border bg-white px-4 py-3.5 text-base text-navy-700 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-1'

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto mt-10 max-w-lg text-left">
      <div className="space-y-6">
        <div>
          <label htmlFor="apply-name" className="mb-2 block text-sm font-semibold text-navy-700">
            이름 <span className="text-teal-600">*</span>
          </label>
          <input
            id="apply-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange('name')}
            placeholder="이름을 입력해주세요"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'apply-name-error' : undefined}
            className={`${inputBaseClass} ${
              errors.name ? 'border-red-300' : 'border-navy-100'
            }`}
          />
          {errors.name && (
            <p id="apply-name-error" className="mt-2 text-sm text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="apply-phone" className="mb-2 block text-sm font-semibold text-navy-700">
            연락처 <span className="text-teal-600">*</span>
          </label>
          <input
            id="apply-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange('phone')}
            placeholder="010-1234-5678"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'apply-phone-error' : undefined}
            className={`${inputBaseClass} ${
              errors.phone ? 'border-red-300' : 'border-navy-100'
            }`}
          />
          {errors.phone && (
            <p id="apply-phone-error" className="mt-2 text-sm text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="apply-message"
            className="mb-2 block text-sm font-semibold text-navy-700"
          >
            문의 내용 <span className="text-teal-600">*</span>
          </label>
          <textarea
            id="apply-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange('message')}
            placeholder="도입·실증 관련 문의 내용을 자유롭게 남겨주세요"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'apply-message-error' : undefined}
            className={`${inputBaseClass} resize-none ${
              errors.message ? 'border-red-300' : 'border-navy-100'
            }`}
          />
          {errors.message && (
            <p id="apply-message-error" className="mt-2 text-sm text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-full bg-navy-700 px-8 py-4 text-base font-bold text-white shadow-card transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-navy-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
        >
          {status === 'submitting' ? '전송 중...' : '문의 접수하기'}
        </button>

        {status === 'success' && (
          <p
            role="status"
            className="rounded-xl bg-leaf-100 px-4 py-3.5 text-center text-sm font-semibold text-navy-700"
          >
            문의가 접수되었습니다. 빠르게 연락드리겠습니다.
          </p>
        )}
        {status === 'error' && (
          <p
            role="alert"
            className="rounded-xl bg-red-50 px-4 py-3.5 text-center text-sm font-semibold text-red-500"
          >
            잠시 후 다시 시도해주세요
          </p>
        )}
      </div>
    </form>
  )
}
