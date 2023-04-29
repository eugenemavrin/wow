/*
 * Copyright 2023 The Outline Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Objective-C API for talking to  Go package.
//   gobind -lang=objc 
//
// File is generated by gobind. Do not edit.

#ifndef __Universe_H__
#define __Universe_H__

@import Foundation;
#include "ref.h"

@protocol Universeerror;
@class Universeerror;

@protocol Universeerror <NSObject>
- (NSString* _Nonnull)error;
@end

@class Universeerror;

@interface Universeerror : NSError <goSeqRefInterface, Universeerror> {
}
@property(strong, readonly) _Nonnull id _ref;

- (nonnull instancetype)initWithRef:(_Nonnull id)ref;
- (NSString* _Nonnull)error;
@end

#endif
