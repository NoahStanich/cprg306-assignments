"use client";

import { useUserAuth } from "../utils/auth-context";
import ItemList from "./item-list"

export default function Page() {

  const {user} = useUserAuth();

  return (
    <main>
      { user ? (
        <section>
          <div>
            <h1>Shopping List</h1>
            <ItemList />
          </div>
        </section>
      ) : (
        <section>
          <p>You must be logged in to view this page.</p>
        </section>
      )}
    </main>
    
  );
}
