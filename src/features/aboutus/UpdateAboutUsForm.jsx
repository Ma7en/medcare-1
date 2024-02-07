/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

import Form from "../../ui/form/Form";
import FormRow from "../../ui/form/FormRow";
import Input from "../../ui/form/Input";
import Textarea from "../../ui/form/Textarea";
import FileInput from "../../ui/form/FileInput";
import Button from "../../ui/global/Button";

import { useUpdateAboutUs } from "./useUpdateAboutUs";
import FormRowVertical from "../../ui/form/FormRowVertical";
// import { useAboutUs } from "./useAboutUs";

function UpdateAboutUsForm({ about }) {
    // console.log(`a`, about);
    // const { isLoading, aboutus } = useAboutUs();
    const { isUpdating, updateAboutUs } = useUpdateAboutUs();

    const { register, handleSubmit, reset, getValues, formState } = useForm({});
    const { errors } = formState;

    function onSubmit(data) {
        const image =
            typeof data.image === "string" ? data.image : data.image[0];

        updateAboutUs(
            // eslint-disable-next-line no-undef
            { newAboutUsData: { ...data, image }, id },
            {
                // eslint-disable-next-line no-unused-vars
                onSuccess: (data) => {
                    reset();
                },
            },
        );
    }

    function onError(errors) {
        console.log(errors);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)} type={"updata"}>
            <FormRowVertical label="About title" error={errors?.name?.message}>
                <Input
                    type="text"
                    id="name"
                    disabled={isUpdating}
                    {...register("name", {
                        required: "This field is required",
                    })}
                />
            </FormRowVertical>

            <FormRowVertical
                label="summary for About"
                error={errors?.summary?.message}
            >
                <Textarea
                    // type="number"
                    id="summary"
                    defaultValue=""
                    disabled={isUpdating}
                    {...register("summary", {
                        required: "This field is required",
                    })}
                />
            </FormRowVertical>

            <FormRowVertical
                label="Description for website"
                error={errors?.description?.message}
            >
                <Textarea
                    type="number"
                    id="description"
                    defaultValue=""
                    disabled={isUpdating}
                    {...register("description", {
                        required: "This field is required",
                    })}
                />
            </FormRowVertical>

            <FormRowVertical label="About video" error={errors?.video?.message}>
                <FileInput
                    id="video"
                    accept="image/*"
                    // type="file"
                    {...register("video", {
                        required: isUpdating ? false : "This field is required",
                    })}
                />
            </FormRowVertical>

            {/* <FormRow label="Cabin photo" error={errors?.image?.message}> */}
            <FormRowVertical label="About photo" error={errors?.image?.message}>
                <FileInput
                    id="image"
                    accept="image/*"
                    // type="file"
                    {...register("image", {
                        required: isUpdating ? false : "This field is required",
                    })}
                />
            </FormRowVertical>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button variation="secondary" type="reset">
                    Cancel
                </Button>

                <Button disabled={isUpdating}>Update About</Button>
            </FormRow>
        </Form>
    );
}

export default UpdateAboutUsForm;
