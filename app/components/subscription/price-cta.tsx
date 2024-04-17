import { Form } from "@remix-run/react";
import { CustomerPortalForm } from "./customer-portal-form";
import type { Price } from "./prices";
import { Button } from "../shared/button";

export const PriceCta = ({
  price,
  subscription,
}: {
  price: Price;
  subscription: Object | null;
}) => {
  if (price.id === "free") return null;

  const isTeamSubscriptionColumn =
    price.product.metadata.shelf_tier === "tier_2";

  if (subscription) {
    return (
      <CustomerPortalForm
        buttonText={subscription ? "Manage subscription" : undefined}
      />
    );
  }

  return (
    <>
      <Form method="post">
        <input type="hidden" name="priceId" value={price.id} />
        <input
          type="hidden"
          name="shelfTier"
          value={price.product.metadata.shelf_tier}
        />
        <Button type="submit" name="intent" value="subscribe">
          Upgrade to {price.product.name}
        </Button>

        {isTeamSubscriptionColumn && !subscription && (
          <Button
            variant="secondary"
            className="mt-2"
            type="submit"
            name="intent"
            value="trial"
          >
            Start 14 day free trial
          </Button>
        )}
      </Form>
    </>
  );
};
