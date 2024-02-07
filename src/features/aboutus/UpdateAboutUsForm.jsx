/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";

import Form from "../../ui/form/Form";
import FormRow from "../../ui/form/FormRow";
import Input from "../../ui/form/Input";
import Textarea from "../../ui/form/Textarea";
import FileInput from "../../ui/form/FileInput";
import Button from "../../ui/global/Button";

import { useUpdateAboutUs } from "./useUpdateAboutUs";
import FormRowVertical from "../../ui/form/FormRowVertical";
import { useEffect } from "react";
import DevSrc from "../../ui/form/DevSrc";
import Spinner from "../../ui/spinner/Spinner";
// import { useAboutUs } from "./useAboutUs";

function UpdateAboutUsForm({ about }) {
    const {
        id: updateId,
        created_at,
        dataupdate,
        title,
        summary,
        description,
        image,
        video,
        email,
        user_id,
    } = about;
    const { isUpdating, updateAboutUs } = useUpdateAboutUs();

    const { register, handleSubmit, reset, getValues, formState, setValue } =
        useForm({});
    const { errors } = formState;

    useEffect(() => {
        const updateAboutData = async () => {
            try {
                setValue("title", title || "");
                setValue("summary", summary || "");
                setValue("dataupdate", new Date().toISOString() || dataupdate);

                const descriptionData = async () => {
                    try {
                        description.map((des) =>
                            setValue(`description${des.id}`, `${des.line}`),
                        );
                    } catch (error) {
                        console.log(error);
                    }
                };
                descriptionData();
            } catch (error) {
                console.error(error);
            }
        };
        updateAboutData();
    }, [dataupdate, description, setValue, summary, title]);

    function onSubmit(data) {
        const image =
            typeof data.image === "string" ? data.image : data.image[0];

        updateAboutUs(
            // eslint-disable-next-line no-undef
            {
                newAboutUsData: {
                    ...data,
                    image,
                    email: email,
                    user_id: user_id,
                },
                id: updateId,
            },
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

    // if (description) return <Spinner />;

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)} type={"updata"}>
            <FormRowVertical label="About title" error={errors?.title?.message}>
                <Input
                    type="text"
                    id="title"
                    disabled={isUpdating}
                    {...register("title", {
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
                label="Description for About"
                error={errors?.description?.message}
            >
                <>
                    {description.map((des) => (
                        // <p key={des.id}>ddd</p>

                        <Input
                            key={des.id}
                            type="text"
                            id={`description${des.id}`}
                            disabled={isUpdating}
                            {...register(`description${des.id}`, {
                                required: "This field is required",
                            })}
                        />
                    ))}
                </>
            </FormRowVertical>

            <FormRowVertical label="About video" error={errors?.video?.message}>
                <>
                    <DevSrc>
                        <label>Choose the video</label>

                        <FileInput
                            id="video"
                            accept="image/*"
                            // type="file"
                            {...register("video", {
                                required: isUpdating
                                    ? false
                                    : "This field is required",
                            })}
                        />
                    </DevSrc>

                    <DevSrc>
                        <label>Choose the Track video</label>

                        <FileInput
                            id="video"
                            accept="image/*"
                            // type="file"
                            {...register("video", {
                                required: isUpdating
                                    ? false
                                    : "This field is required",
                            })}
                        />
                    </DevSrc>
                </>
            </FormRowVertical>

            <FormRowVertical label="About photo" error={errors?.image?.message}>
                <>
                    <DevSrc>
                        <label>Choose the picture</label>

                        <FileInput
                            id="image"
                            accept="image/*"
                            // type="file"
                            {...register("image", {
                                required: isUpdating
                                    ? false
                                    : "This field is required",
                            })}
                        />
                    </DevSrc>

                    <Input
                        type="text"
                        id="alt"
                        placeholder="Enter your description picture"
                        disabled={isUpdating}
                        {...register("alt", {
                            required: "This field is required",
                        })}
                    />
                    <Input
                        type="text"
                        id="caption"
                        placeholder="Enter your Caption picture"
                        disabled={isUpdating}
                        {...register("caption", {
                            required: "This field is required",
                        })}
                    />
                </>
            </FormRowVertical>

            <FormRow>
                {/* type is an HTML attribute! */}
                {/* <Button variation="secondary" type="reset">
                    Cancel
                </Button> */}

                <Button disabled={isUpdating}>Update About</Button>
            </FormRow>
        </Form>
    );
}

export default UpdateAboutUsForm;
