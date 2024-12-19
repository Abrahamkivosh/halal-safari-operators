"use client";

import { Button, CheckboxGroup, Code, Fieldset } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { useController, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  notificationPreference: z.array(z.string()).min(1, {
    message: "You must select at least one framework.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const notificationPreference = [
  {
    title: "Email",
    value: "email",
  },
  {
    title: "Phone",
    value: "phone",
  },
  {
    title: "Whatsapp",
    value: "whatsapp",
  },
];
export const DemoSample = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const notify = useController({
    control,
    name: "notificationPreference",
    defaultValue: [],
  });

  const invalid = !!errors.notificationPreference;

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Fieldset.Root invalid={invalid}>
        <Fieldset.Legend>Select your framework</Fieldset.Legend>
        <CheckboxGroup
          invalid={invalid}
          value={notify.field.value}
          onValueChange={notify.field.onChange}
          name={notify.field.name}
        >
          <Fieldset.Content>
            {notificationPreference.map((item) => (
              <Checkbox key={item.value} value={item.value}>
                {item.title}
              </Checkbox>
            ))}
          </Fieldset.Content>
        </CheckboxGroup>

        {errors.notificationPreference && (
          <Fieldset.ErrorText>
            {errors.notificationPreference.message}
          </Fieldset.ErrorText>
        )}

        <Button size="sm" type="submit" alignSelf="flex-start">
          Submit
        </Button>

        <Code>Values: {JSON.stringify(notify.field.value, null, 2)}</Code>
      </Fieldset.Root>
    </form>
  );
};
