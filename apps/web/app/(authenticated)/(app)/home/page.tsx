import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { db } from "@/prisma/db";

import { auth } from "@clerk/nextjs/app-beta";
import { PageHeader } from "@/components/page-header";
import { useUser } from "@clerk/clerk-react";

export default async function Page(_props: {
  params: { tenantSlug: string };
}) {
  return (
    <div>
      <PageHeader
        title="Welcome to Highstorm"
        description="You can create a new API key by clicking 'API Keys' on the left. Afterwards, you can use the API key to send events to Highstorm."
      />

      <div>
        <pre className="p-4 mt-8 font-mono whitespace-pre border rounded-md border-neutral-300 dark:border-neutral-800">
          {`curl 'https://highstorm.app/api/v1/events/users.signup' \\
  -H 'Authorization: Bearer <HIGHSTORM_TOKEN>' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "event": "Chronark has signed up",
    "content": "A new user has signed up",
    "metadata": {"userId": "123}
  }'
`}
        </pre>
      </div>
    </div>
  );
}
