import { OnboardingModes } from "core/protocol/core";
import { useContext } from "react";
import { Button } from "../..";
import { IdeMessengerContext } from "../../../context/IdeMessenger";
import { useAppDispatch } from "../../../redux/hooks";
import { setDialogMessage, setShowDialog } from "../../../redux/slices/uiSlice";
import { useSubmitOnboarding } from "../hooks/useSubmitOnboarding";

interface OnboardingIdemiaTabProps {
  isDialog?: boolean;
}

export function OnboardingIdemiaTab({ isDialog }: OnboardingIdemiaTabProps) {
  const dispatch = useAppDispatch();
  const ideMessenger = useContext(IdeMessengerContext);
  const { submitOnboarding } = useSubmitOnboarding(
    OnboardingModes.IDEMIA,
    isDialog,
  );

  const onClickSkip = () => {
    submitOnboarding();

    ideMessenger.post("config/openProfile", {
      profileId: undefined,
    });

    if (isDialog) {
      dispatch(setDialogMessage(undefined));
      dispatch(setShowDialog(false));
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-md">
        <div className="mt-3 flex flex-col gap-1 px-2">
          <h2 className="text-lg font-semibold text-primary">
            IDEMIA Onboarding
          </h2>
          <div className="mt-4 w-full">
            <div className="w-full text-center">
              <Button
                onClick={onClickSkip}
                className="w-full"
              >
                Open config File
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
