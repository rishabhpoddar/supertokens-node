// @ts-nocheck
import { TypeEmailVerificationEmailDeliveryInput } from "../../../types";
import { GetContentResult } from "../../../../emaildelivery/services/smtp";
export default function getEmailVerifyEmailContent(
    input: TypeEmailVerificationEmailDeliveryInput,
    from: {
        name: string;
        email: string;
    }
): GetContentResult;
