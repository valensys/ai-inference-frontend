import { Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { AiChatPageComponent } from './ai-chat-page/ai-chat-page.component';
import { ObjectDetectionPageComponent } from './object-detection-page/object-detection-page.component';
import { SkeletonDetectionPageComponent } from './skeleton-detection-page/skeleton-detection-page.component';

export const routes: Routes = [
    { path: 'ai-chat', title: 'AI Chat', component: AiChatPageComponent },
    { path: 'object-detection', title: 'Object Detection', component: ObjectDetectionPageComponent },
    { path: 'skeleton-detection', title: 'Skeleton Detection', component: SkeletonDetectionPageComponent },
];
