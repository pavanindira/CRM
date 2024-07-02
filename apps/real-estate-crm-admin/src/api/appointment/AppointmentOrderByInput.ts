import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  agentId?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  datetime?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
