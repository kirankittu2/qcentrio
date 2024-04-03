import { storeCookie } from "@/app/lib/actions";

export default function AdminAccess() {
  return (
    <div>
      <form action={storeCookie}>
        <input
          className="border bottom-1 border-y-yellow-400"
          name="code"
          type="text"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
