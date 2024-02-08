/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Form from "../../ui/form/Form";
import FormRow from "../../ui/form/FormRow";
import FormRowVertical from "../../ui/form/FormRowVertical";
import DevSrc from "../../ui/form/DevSrc";
import Input from "../../ui/form/Input";
import Textarea from "../../ui/form/Textarea";
import FileInput from "../../ui/form/FileInput";
import Button from "../../ui/global/Button";

import { useUpdateAboutUs } from "./useUpdateAboutUs";
import { useUser } from "../authentication/useUser";
import AboutCreated from "../../ui/about/AboutCreated";

// import Spinner from "../../ui/spinner/Spinner";
// import { useAboutUs } from "./useAboutUs";

function UpdateAboutUsForm({ about }) {
    const { user } = useUser();
    const { id: userId, email: userEmail } = user;

    // console.log(`user`, user);

    const {
        id: updateId,
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
        useForm({
            defaultValues: about,
        });
    const { errors } = formState;

    console.log(`u--`, image);

    useEffect(() => {
        const updateAboutData = async () => {
            try {
                setValue("title", title || "");
                setValue("summary", summary || "");
                setValue("dataupdate", new Date().toISOString() || dataupdate);

                const descriptionData = async () => {
                    try {
                        Object.keys(description).forEach((des) => {
                            setValue(`description.${des}`, description[des]);
                        });
                    } catch (error) {
                        console.log(error);
                    }
                };
                descriptionData();

                const videoData = async () => {
                    try {
                        setValue("video", {
                            src: `${video.src}`,
                            track: `${video.track}`,
                        });
                    } catch (error) {
                        console.log(error);
                    }
                };
                videoData();

                const imageData = async () => {
                    try {
                        setValue("image", {
                            alt: `${image.alt}`,
                            caption: `${image.caption}`,
                            url: `${image.url}`,
                        });
                    } catch (error) {
                        console.log(error);
                    }
                };
                imageData();
            } catch (error) {
                console.error(error);
            }
        };
        updateAboutData();
    }, [
        dataupdate,
        description,
        image.alt,
        image.caption,
        image.url,
        setValue,
        summary,
        title,
        video.src,
        video.track,
    ]);

    function onSubmit(data) {
        // console.log(`d===========`, data);

        let imageSrc =
            data.image && data.image.src ? data.image.src[0] : image.src;
        // typeof data.image === "string" ? data?.image : data?.image?.src[0];
        let ImageE = {
            ...data.image,
            src: imageSrc,
        };

        let videoSrc =
            data.video && data.video.src ? data.video.src[0] : video.src;
        let videoTrack =
            data.video && data.video.track ? data.video.track[0] : video.track;
        let videoE = {
            ...data.video,
            src: videoSrc,
            track: videoTrack,
        };

        updateAboutUs(
            {
                newAboutUsData: {
                    ...data,
                    image: { ...ImageE },
                    video: { ...videoE },
                    email: userEmail,
                    user_id: userId,
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

    return (
        <>
            <AboutCreated dataupdate={dataupdate} />

            <Form onSubmit={handleSubmit(onSubmit, onError)} type={"updata"}>
                <FormRowVertical
                    label="About title"
                    error={errors?.title?.message}
                >
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
                        {Object.keys(description).map((des) => (
                            <Input
                                key={des}
                                type="text"
                                id={`description.${des}`}
                                disabled={isUpdating}
                                {...register(`description.${des}`, {
                                    // required: "This field is required",
                                })}
                            />
                        ))}
                    </>
                </FormRowVertical>

                <FormRowVertical
                    label="About video"
                    error={errors?.video?.message}
                >
                    <>
                        <DevSrc>
                            <label htmlFor="video">Choose the video</label>

                            <FileInput
                                id="video"
                                accept="video/* "
                                // type="file"
                                {...register("video.src", {
                                    // required: "This field is required",
                                })}
                            />
                        </DevSrc>

                        <DevSrc>
                            <label htmlFor="track">
                                Choose the Track video
                            </label>

                            <FileInput
                                id="track"
                                // accept="text/*,.srt,.vtt"
                                accept=".txt,.srt,.vtt"
                                // type="file"
                                {...register("video.track", {
                                    // required: "This field is required",
                                })}
                            />
                        </DevSrc>
                    </>
                </FormRowVertical>

                <FormRowVertical
                    label="About photo"
                    error={errors?.image?.message}
                >
                    <>
                        <DevSrc>
                            <label htmlFor="image">Choose the picture</label>

                            <FileInput
                                id="image"
                                accept="image/* "
                                {...register("image.src", {
                                    // required: image.src
                                    //     ? false
                                    //     : "This field is required",
                                })}
                            />
                        </DevSrc>
                        <span>Or</span>
                        <DevSrc>
                            <label htmlFor="url">Type the URL</label>

                            <Input
                                type="text"
                                id="url"
                                disabled={isUpdating}
                                {...register("image.url", {
                                    // required: "This field is required",
                                })}
                            />
                        </DevSrc>

                        <DevSrc>
                            <label htmlFor="alt">
                                Enter your description picture
                            </label>
                            <Input
                                type="text"
                                id="alt"
                                placeholder="Enter your description picture"
                                disabled={isUpdating}
                                {...register("image.alt", {
                                    required: "This field is required",
                                })}
                            />
                        </DevSrc>

                        <DevSrc>
                            <label htmlFor="caption">
                                Enter your Caption picture
                            </label>
                            <Input
                                type="text"
                                id="caption"
                                placeholder="Enter your Caption picture"
                                disabled={isUpdating}
                                {...register("image.caption", {
                                    required: "This field is required",
                                })}
                            />
                        </DevSrc>
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

            {/* CreatedBy */}
        </>
    );
}

export default UpdateAboutUsForm;
