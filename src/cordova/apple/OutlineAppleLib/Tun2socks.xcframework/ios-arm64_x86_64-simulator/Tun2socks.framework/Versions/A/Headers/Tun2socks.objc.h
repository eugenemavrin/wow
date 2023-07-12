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

// Objective-C API for talking to github.com/Jigsaw-Code/outline-go-tun2socks/outline/apple Go package.
//   gobind -lang=objc github.com/Jigsaw-Code/outline-go-tun2socks/outline/apple
//
// File is generated by gobind. Do not edit.

#ifndef __Tun2socks_H__
#define __Tun2socks_H__

@import Foundation;
#include "ref.h"
#include "Universe.objc.h"

#include "Shadowsocks.objc.h"

@protocol Tun2socksOutlineTunnel;
@class Tun2socksOutlineTunnel;
@protocol Tun2socksTunWriter;
@class Tun2socksTunWriter;

@protocol Tun2socksOutlineTunnel <NSObject>
- (void)disconnect;
- (BOOL)isConnected;
- (BOOL)updateUDPSupport;
- (BOOL)write:(NSData* _Nullable)data ret0_:(long* _Nullable)ret0_ error:(NSError* _Nullable* _Nullable)error;
@end

@protocol Tun2socksTunWriter <NSObject>
- (BOOL)close:(NSError* _Nullable* _Nullable)error;
- (BOOL)write:(NSData* _Nullable)p0 n:(long* _Nullable)n error:(NSError* _Nullable* _Nullable)error;
@end

/**
 * ConnectShadowsocksTunnel reads packets from a TUN device and routes it to a Shadowsocks proxy server.
Returns an OutlineTunnel instance that should be used to input packets to the tunnel.

`tunWriter` is used to output packets to the TUN (VPN).
`client` is the Shadowsocks client (created by [shadowsocks.NewClient]).
`isUDPEnabled` indicates whether the tunnel and/or network enable UDP proxying.

Sets an error if the tunnel fails to connect.
 */
FOUNDATION_EXPORT id<Tun2socksOutlineTunnel> _Nullable Tun2socksConnectShadowsocksTunnel(id<Tun2socksTunWriter> _Nullable tunWriter, ShadowsocksClient* _Nullable client, BOOL isUDPEnabled, NSError* _Nullable* _Nullable error);

@class Tun2socksOutlineTunnel;

@class Tun2socksTunWriter;

/**
 * OutlineTunnel embeds the tun2socks.Tunnel interface so it gets exported by gobind.
 */
@interface Tun2socksOutlineTunnel : NSObject <goSeqRefInterface, Tun2socksOutlineTunnel> {
}
@property(strong, readonly) _Nonnull id _ref;

- (nonnull instancetype)initWithRef:(_Nonnull id)ref;
- (void)disconnect;
- (BOOL)isConnected;
- (BOOL)updateUDPSupport;
- (BOOL)write:(NSData* _Nullable)data ret0_:(long* _Nullable)ret0_ error:(NSError* _Nullable* _Nullable)error;
@end

/**
 * TunWriter is an interface that allows for outputting packets to the TUN (VPN).
 */
@interface Tun2socksTunWriter : NSObject <goSeqRefInterface, Tun2socksTunWriter> {
}
@property(strong, readonly) _Nonnull id _ref;

- (nonnull instancetype)initWithRef:(_Nonnull id)ref;
- (BOOL)close:(NSError* _Nullable* _Nullable)error;
- (BOOL)write:(NSData* _Nullable)p0 n:(long* _Nullable)n error:(NSError* _Nullable* _Nullable)error;
@end

#endif