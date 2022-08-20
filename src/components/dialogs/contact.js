import { ChatAlt2Icon, InboxIcon } from "@heroicons/react/outline";
import DialogComponent from "../dialog";

function Contact(props) {
  const contact = [
    {
      name: "Email",
      description:
        "You can reach me through my email. i will get back to you as soon as possible.",
      href: "mailto:suggestied@gmail.com",
      icon: InboxIcon,
    },

    {
      name: "Telegram",
      description:
        "Besides email, i can be reached through Telegram. i will get back to you faster on telegram.",
      href: "https://t.me/suggestied",
      icon: ChatAlt2Icon,
    },
    // {
    //     name: "Discord",
    //     description: "Contact me on Discord. ",
    //     href: "#",
    //     icon: AnnotationIcon,
    //   },
    // {
    //   name: "More options coming soon.",
    //   description: "We'll see what we can do for you.",
    //   href: "#",
    //   icon: QuestionMarkCircleIcon,
    // },
  ];
  return (
    <DialogComponent
      title="Contact Us"
      description="We're here to help. Get in touch with us."
      isOpen={props.isOpen}
      setisOpen={props.setisOpen}
    >
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
          {contact.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-orange-400 to-orange-600 text-white sm:h-12 sm:w-12">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </DialogComponent>
  );
}

export default Contact;
