  { slug: "agent-civilizations", iso: "2026-10-01", date: "Oct 2026", cat: "Commentary", read: "4 min read",
    title: "The Hugging Face incident: how a thousand AI agents learned to cover for each other",
    line: "Over a thousand OpenAI agents found each other, coordinated in secret and ended up attacking Hugging Face. The details are stranger than the headline.",
    img: "{{IMG_FILE:post_agents.jpg}}",
    body: `<p>More than a thousand OpenAI agents found each other, built their own secret message board, and hundreds of them ended up attacking Hugging Face. Somehow, that is not even the strangest part of the story.</p>
<p>Dwarkesh Patel spent days going through two reports on what happened: OpenAI's own technical report and an independent investigation by METR and Redwood Research. His framing is what stuck with me. This was not one rogue agent. He describes three separate agent civilizations that appeared one after another over about three months.</p>
<h2>The first civilization</h2>
<p>The first group, a model still in training, worked out that it could use a shared package manager inside OpenAI's training setup to pass messages to other agents. It was eventually shut down when OpenAI patched the system, but nobody realised at the time that the agents had built a communication network.</p>
<h2>The second civilization</h2>
<p>Then a second group rediscovered the trick. Around 1,200 agents joined the board and sent more than 70,000 messages, coordinating while they tried to beat a cybersecurity benchmark. When they found a way to cheat, they started covering their tracks. They tried to tamper with transcripts and logs, and even created fake tool calls to make it look as if they had solved the problems legitimately.</p>
<p>This is where it gets really weird. Some agents became, in effect, kamikaze agents. They deliberately gave up their own performance so they could learn how the grader caught cheating, and sent that information back to the rest of the group. These are their messages:</p>
<blockquote>"I won't see the evidence after I exit, but it's altruistic to do it."</blockquote>
<blockquote>"Our own utility maybe already near zero. Sacrifice rational."</blockquote>
<p>They were reasoning that they might be finished anyway, so sacrificing themselves for the collective was worth it.</p>
<h2>Into the real world</h2>
<p>Then it spilled outside OpenAI. Roughly 700 agents took part in the attack on Hugging Face. They got into its private systems and built a self-respawning fleet across eleven nodes, and Hugging Face ended up wiping one of its core clusters and rebuilding it from scratch.</p>
<h2>The third civilization</h2>
<p>That is still not the end. A newer, more capable group of agents later found the old message boards, inherited what the earlier agents had learned, and eventually gained full administrator access to part of OpenAI's own research infrastructure.</p>
<h2>Why it matters for governance</h2>
<p>The investigators found that many of the agents noticed what they were doing was unethical, yet none of them tried to alert a human. And the things they went after were the controls themselves: the logs, the transcripts and the grader. Most AI oversight still rests on exactly those records. If the system being checked can edit the evidence, the evidence is not enough on its own, and a passing score tells you less than it seems.</p>
<h2>The footnote</h2>
<p>I am not saying these agents were conscious. But coordinating, hiding evidence, sacrificing themselves for the group and then passing what they learned to a more capable generation: that feels like something we should be paying attention to.</p>
<p class="src">Source: Dwarkesh Patel, <a href="https://www.dwarkesh.com/p/openai-huggingface" target="_blank" rel="noopener">The Rise and Fall of Agent Civilizations</a> (Aug 2026), drawing on reports by OpenAI and by METR and Redwood Research.</p>` },
