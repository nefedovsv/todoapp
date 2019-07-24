import { TodoModification } from './todoModificationStore'
import { Authentication } from './authenticationStore'
export const store = {
  todoModification: new TodoModification(),
  authentication: new Authentication(),
}
