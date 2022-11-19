import { Container } from "./Container.tsx";
import { site } from "../data/site.ts";

export function HomeHeader() {
  return (
    <header
      class="bg-blue-200 relative min-h-[30vh]"
    >
      <Container>
        <h1 class="text-4xl lg:text-8xl font-bold absolute bottom-6 flex items-center">
          {site.title}
        </h1>
      </Container>
    </header>
  );
}
