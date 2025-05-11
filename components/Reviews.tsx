import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

export default function Reviews() {
  return (
    <section id="testimonials" className="space-y-8 py-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Clients Say</h2>
        <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
          Hear from companies that successfully sold their unused software licenses through SoftSell.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-muted relative">
              <Image src="/sarah.png" alt="Sarah Johnson" fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-semibold">Sarah Johnson</h3>
              <p className="text-sm text-muted-foreground">IT Manager, AlphaTech</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              “SoftSell helped us turn unused licenses into revenue. The process was straightforward, and support was top-notch.”
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-muted relative">
              <Image src="/michael.png" alt="Michael Chen" fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-semibold">Michael Chen</h3>
              <p className="text-sm text-muted-foreground">Operations Lead, ByteWorks</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              “We recovered costs from old tools thanks to SoftSell. Highly recommend it to any company managing software assets.”
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
