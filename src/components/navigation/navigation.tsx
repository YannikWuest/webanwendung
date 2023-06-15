import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navigation = component$(() => {
  return (
    <div class="flex items-center justify-between bg-white shadow-xl py-5">
      <div class="ml-5">LOGO</div>
      <div class="mr-5">
        <ul class="flex space-x-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/suchen/">Buch suchen</Link>
          </li>
          <li>
            <Link href="/login/">Login</Link>
          </li>
          <li>
            <Link href="/erstellen/">Buch erstellen</Link>
          </li>
        </ul>
      </div>
    </div>
  );
});
