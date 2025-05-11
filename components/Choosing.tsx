import { Check } from "lucide-react"

export default function Choosing() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose SoftSell</h2>
        <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
          Simplify license reselling with our secure, transparent, and user-friendly platform.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Instant License Listing</h3>
            </div>
            <p className="text-muted-foreground pl-8">
              Get your software license on the market within minutes—no technical knowledge required.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Verified Buyers Network</h3>
            </div>
            <p className="text-muted-foreground pl-8">
              Sell with confidence to pre-vetted buyers in our trusted ecosystem.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Real-Time Dashboard</h3>
            </div>
            <p className="text-muted-foreground pl-8">
              Track listing performance, buyer activity, and earnings—all in one place.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Secure Transactions</h3>
            </div>
            <p className="text-muted-foreground pl-8">
              Bank-grade encryption and transfer validation ensure every deal is safe and compliant.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">No Hidden Fees</h3>
            </div>
            <p className="text-muted-foreground pl-8">
              Transparent pricing and commissions—no surprises, ever.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Dedicated Seller Support</h3>
            </div>
            <p className="text-muted-foreground pl-8">
              Our team is here 24/7 to help you through every step of the selling process.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
