import { combineReducers } from 'redux';
import JobsReducer from './reducer_jobs';
import ActiveJobReducer from './reducer_active_job';
import ProjectsReducer from './reducer_projects';
import ActiveProjectReducer from './reducer_active_project';
import FocusedProjectReducer from './reducer_focused_project';
import SkillsReducer from './reducer_skills';
import ActiveSkillReducer from './reducer_active_skill';

const rootReducer = combineReducers({
    jobs: JobsReducer,
    activeJob: ActiveJobReducer,
    projects: ProjectsReducer,
    activeProject: ActiveProjectReducer,
    focusedProject: FocusedProjectReducer,
    skills: SkillsReducer,
    activeSkill: ActiveSkillReducer,
});

export default rootReducer;
