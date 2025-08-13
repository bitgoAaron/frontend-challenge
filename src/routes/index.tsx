import { createFileRoute } from "@tanstack/react-router";
import { Intro } from "~/components/Intro";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return <Intro />;
}
