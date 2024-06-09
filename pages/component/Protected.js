import { useRouter } from "next/router";
import { useEffect} from "react";

export default function Protected({ children, onboarded }) {
    const router = useRouter();

  useEffect(() => {
    if (onboarded !== "true") {
      router.push("/onboarding");
    }
  }, [router, onboarded]);

  return onboarded === "true" ? <>{children}</> : null;
}
