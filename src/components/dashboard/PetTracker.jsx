import { Card, Badge } from "react-bootstrap";
import { Clock, Droplet, Scissors, Check } from "lucide-react";

const stages = [
  {
    id: 1,
    name: "Dropped Off!",
    icon: Clock,
    description: "Your pet has arrived! See you soon!",
  },
  {
    id: 2,
    name: "Bath Time!",
    icon: Droplet,
    description: "Getting squeaky clean, smellin good!",
  },
  {
    id: 3,
    name: "Snippin N Clippin!",
    icon: Scissors,
    description: "Looking fabulous!",
  },
  {
    id: 4,
    name: "Ready!",
    icon: Check,
    description: "All done! Ready for treats!",
  },
];

export default function PetTracker({ appointment }) {
  const currentStage = appointment?.currentStage || 3;

  if (!appointment || appointment.status !== "in-progress") {
    return null;
  }

  return (
    <Card className="border-0 shadow-sm mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">🐾 {appointment.petName}'s Grooming Status</h5>
          <Badge
            className="px-3 py-2"
            style={{ backgroundColor: "#ffcad4", color: "#000" }}
          >
            In Progress
          </Badge>
        </div>

        <p className="text-muted small mb-4">
          Track your pet's grooming journey in real-time
        </p>

        {/* Tracker Timeline */}
        <div className="position-relative">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isCompleted = stage.id < currentStage;
            const isCurrent = stage.id === currentStage;
            const isUpcoming = stage.id > currentStage;

            return (
              <div
                key={stage.id}
                className="d-flex align-items-start mb-4 position-relative"
              >
                {/* Connecting Line */}
                {index < stages.length - 1 && (
                  <div
                    className="position-absolute start-0 ms-3"
                    style={{
                      width: "2px",
                      height: "100%",
                      top: "40px",
                      backgroundColor: isCompleted ? "#ffcad4" : "#d8e2dc",
                      zIndex: 0,
                    }}
                  />
                )}

                {/* Icon Circle */}
                <div
                  className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 position-relative`}
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor:
                      isCompleted || isCurrent ? "#ffcad4" : "#d8e2dc",
                    color: isCompleted || isCurrent ? "#000" : "#666",
                    zIndex: 1,
                  }}
                >
                  <Icon size={24} />
                </div>

                {/* Content */}
                <div className="ms-3 flex-grow-1">
                  <h6
                    className={`mb-1 ${
                      isCurrent
                        ? "fw-bold"
                        : isCompleted
                        ? "fw-semibold"
                        : "text-muted"
                    }`}
                    style={{ color: isCurrent ? "#f4acb7" : "" }}
                  >
                    {stage.name}
                    {isCurrent && (
                      <span className="ms-2">
                        <span
                          className="spinner-grow spinner-grow-sm"
                          style={{ color: "#ffcad4" }}
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </span>
                      </span>
                    )}
                  </h6>
                  <small
                    className={
                      isCompleted || isCurrent ? "text-muted" : "text-muted"
                    }
                  >
                    {stage.description}
                  </small>
                  {isCompleted && (
                    <div className="mt-1">
                      <small style={{ color: "#4ade80" }}>✓ Completed</small>
                    </div>
                  )}
                </div>

                {/* Time stamps */}
                {(isCompleted || isCurrent) && (
                  <div className="text-end text-muted small">
                    {isCompleted ? "2:15 PM" : isCurrent ? "Now" : ""}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Estimated Completion */}
        <div
          className="rounded p-3 mt-3"
          style={{ backgroundColor: "#d8e2dc" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <small className="text-muted d-block">Estimated Completion</small>
              <strong style={{ color: "#f4acb7" }}>3:30 PM</strong>
            </div>
            <div className="text-end">
              <small className="text-muted d-block">Groomer</small>
              <strong>{appointment.groomer}</strong>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
