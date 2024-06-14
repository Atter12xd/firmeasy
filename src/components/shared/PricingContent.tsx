import { useState } from "react";
import SwitchPlanPeriod from "./SwitchPlanPeriod";
import SwitchPlanType from "./SwitchPlanType";
import Plan from "./Plan";

export default function PricingContent() {
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [type, setType] = useState<'web' | 'api'>('web')
  return (
    <>
      <SwitchPlanPeriod period={period} setPeriod={setPeriod} />
      <SwitchPlanType type={type} setType={setType} />
      <div className="content">
        <Plan period={period} type={type} plan="plan1" />
        <Plan period={period} type={type} plan="plan2" />
        <Plan period={period} type={type} plan="plan3" />
      </div>
    </>
  )
}
