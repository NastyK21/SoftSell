import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Working() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
        <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
          Selling your unused software licenses has never been easier—just follow these 3 simple steps.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Step 1: List Your License</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Sign up and upload the details of your unused software license. We’ll verify it in minutes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Step 2: Connect with Buyers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your listing is promoted to our network of verified buyers. Get notified the moment there's interest.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Step 3: Complete the Sale</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Securely transfer the license and receive your payment instantly—no middlemen, no delays.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
