import Link from "next/link";
const FaqsData = [
  [
    {
      question: 'Does Responsively App render the page with the same engine as the browser?',
      answer:
        'No, Responsively App is built on top of Electron and uses Chromium as its rendering engine.',
    },
    {
      question: 'Does Responsively App accurately render as real devices?',
      answer:
        'Responsively App tries to render pages as close as possible to real devices but it may not be 100% accurate.',
    },
    {
      question: 'Is Responsively App a good replacement for real devices?',
      answer:
        'No, Responsively App is not a replacement for real devices. It is a tool that renders pages in viewport sizes of various devices, but it does not emulate their behavior.',
    },
  ],
  [
    {
      question: 'Is Responsively App free?',
      answer:
        'Yes, Responsively App is free to use and open source. You can find the source code on GitHub.',
    },

    {
      question: 'How do I report a bug?',
      answer: (
        <>
          Please open an issue on our{' '}
          <a
            href="https://github.com/responsively-org/responsively-app/issues"
            className="underline"
          >
            GitHub repo
          </a>{' '}
          and well look into it.
        </>
      ),
    },
    {
      question: 'How do I request a feature?',
      answer: (
        <>
          Please open an issue on our{' '}
          <a
            href="https://github.com/responsively-org/responsively-app/issues"
            className="underline"
          >
            GitHub repo
          </a>{' '}
          explainng your need and well look into it.
        </>
      ),
    },
  ],
  [
    {
      question: 'How can I support Responsively App?',
      answer: (
        <>
          You can support in a lot of ways and we have details of in our{' '}
          <Link href="/sponsor" className="underline">
            Sponsorship
          </Link>{' '}
          page.
        </>
      ),
    },
    {
      question: 'How can I contribute to Responsively App?',
      answer: (
        <>
          Please checkout our{' '}
          <a
            href="https://github.com/responsively-org/responsively-app/issues"
            className="underline"
          >
            GitHub repo
          </a>{' '}
          for issues that needs help and give them a try.
        </>
      ),
    },
  ],
];

export default FaqsData