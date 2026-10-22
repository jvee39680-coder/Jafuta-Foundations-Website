const assetDirectory = '/Donate — Jafuta Foundation_files'

const donationOptions = [
  {
    name: 'PayPal',
    image: `${assetDirectory}/PayPal_Logo2014.png`,
    imageAlt: 'PayPal',
    href: 'https://www.paypal.com/donate/',
    imageClassName: 'h-12 w-12 object-contain',
  },
  {
    name: 'Givebutter',
    image: `${assetDirectory}/givebutter-logo+(1).png`,
    imageAlt: 'Givebutter',
    href: 'https://givebutter.com/',
    imageClassName: 'h-12 w-52 object-contain',
  },
  {
    name: 'TrustBridge',
    image: `${assetDirectory}/Trustbridge+Logo+-+Jafuta+site.webp`,
    imageAlt: 'TrustBridge global',
    href: 'https://trustbridge.global/',
    imageClassName: 'h-12 w-40 object-contain',
  },
]

const DonationLink = ({ option }) => (
  <a
    className="flex min-h-16 w-full items-center justify-center bg-[#398b91] px-5 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-[#2e7479] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e7479]"
    href={option.href}
    target="_blank"
    rel="noreferrer"
  >
    Donate via {option.name}
  </a>
)

const Donate = () => {
  const paypal = donationOptions[0]
  const givebutter = donationOptions[1]
  const trustbridge = donationOptions[2]

  return (
    <main className="bg-white pt-28 lg:pt-[188px]">
      <div className="mx-auto w-[94%]">
        <img
          className="h-[clamp(220px,29vw,390px)] w-full object-cover object-center"
          src={`${assetDirectory}/kids-africa-nonprofit.jpg`}
          alt="Children playing together on swings"
        />
      </div>

      <section className="mx-auto max-w-[600px] px-6 pb-20 pt-12 text-[#332b26]">
        <h1 className="mb-8 text-3xl font-normal leading-tight sm:text-4xl">
          Make a Difference
        </h1>
        <p className="text-base leading-[1.8] text-[#514944] sm:text-lg">
          Whether large or small, every donation matters. We steward your
          contribution carefully, transparently, and with deep respect for both
          our donors and the communities we serve.
        </p>
      </section>

      <section
        className="bg-[#eee5da] px-6 py-12 sm:px-10 sm:py-16"
        aria-label="Donation methods"
      >
        <div className="mx-auto grid max-w-[760px] gap-x-20 gap-y-12 md:grid-cols-2">
          <div className="space-y-12">
            <div className="flex flex-col items-center gap-6">
              <img
                className={paypal.imageClassName}
                src={paypal.image}
                alt={paypal.imageAlt}
              />
              <DonationLink option={paypal} />
            </div>

            <div className="flex flex-col items-center gap-6">
              <img
                className={givebutter.imageClassName}
                src={givebutter.image}
                alt={givebutter.imageAlt}
              />
              <DonationLink option={givebutter} />
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <img
              className={trustbridge.imageClassName}
              src={trustbridge.image}
              alt={trustbridge.imageAlt}
            />
            <DonationLink option={trustbridge} />
            <p className="w-full text-base leading-[1.8] text-[#514944]">
              We can receive contributions from any country via{' '}
              <strong className="font-semibold text-[#332b26]">
                TrustBridge
              </strong>
              . TrustBridge provides tax receipts for most countries. By
              clicking the link you can choose to request a tax receipt for
              your country if available.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Donate
